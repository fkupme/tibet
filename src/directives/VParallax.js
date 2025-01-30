// directives/parallax.js
export default {
  mounted(el, binding) {
    // Получаем конфигурацию из значения директивы
    const config = binding.value || {}

    // Настройки по умолчанию с улучшенной валидацией
    const options = {
      cssKey: validateCssKey(config.cssKey) || 'backgroundPosition',
      cssProperty:
        validateCssProperty(config.cssProperty) || 'backgroundPositionY',
      ratio: validateRatio(config.ratio) || -0.7,
      initialValue: Number(config.initialValue) || 0,
      canMove: Boolean(config.canMove ?? true),
      scrollerId: config.scrollerId || null,
      maxValue: config.maxValue !== undefined ? Number(config.maxValue) : null,
      minValue: config.minValue !== undefined ? Number(config.minValue) : null,
      cssUnit: validateCssUnit(config.cssUnit) || 'px',
      cb: typeof config.cb === 'function' ? config.cb : null,
      cb_args: Array.isArray(config.cb_args) ? config.cb_args : [],
      cb_context: config.cb_context || null,
      scrollElement: validateScrollElement(config.scrollElement) || null,
      parallaxElement: validateParallaxElement(config.parallaxElement) || el,
      name: String(config.name) || 'parallaxDirective',
    }

    // Определяем элемент прокрутки с проверкой существования
    let scrollElement = options.scrollElement
    if (!scrollElement) {
      if (options.scrollerId) {
        scrollElement = document.getElementById(options.scrollerId)
        if (!scrollElement) {
          console.warn(
            `Scroller element with id "${options.scrollerId}" not found`
          )
          scrollElement = window
        }
      } else {
        scrollElement = window
      }
    }

    // Функция для вычисления значения прокрутки с защитой от NaN
    const calculateScrollValue = (scrollPos) => {
      let calcVal = scrollPos * options.ratio + options.initialValue

      // Применяем ограничения
      if (options.maxValue !== null) {
        calcVal = Math.min(calcVal, options.maxValue)
      }
      if (options.minValue !== null) {
        calcVal = Math.max(calcVal, options.minValue)
      }

      return calcVal
    }

    // Функция для форматирования CSS значения
    const formatCssValue = (calcVal) => {
      if (options.cssKey === 'backgroundPosition') {
        if (options.cssProperty.includes('X')) {
          return `calc(50% + ${calcVal}${options.cssUnit}) center`
        }
        return `center calc(50% + ${calcVal}${options.cssUnit})`
      }
      return `${calcVal}${options.cssUnit}`
    }

    // Основная функция обновления стилей
    const evaluateScroll = () => {
      if (!options.canMove) return

      try {
        const scrollPos =
          scrollElement === window ? window.scrollY : scrollElement.scrollTop
        const calcVal = calculateScrollValue(scrollPos)
        const resultVal = formatCssValue(calcVal)

        // Применяем стиль с проверкой существования элемента
        if (options.parallaxElement && options.parallaxElement.style) {
          options.parallaxElement.style[options.cssKey] = resultVal
        }

        // Безопасный вызов колбэка
        if (options.cb) {
          try {
            options.cb.apply(options.cb_context, options.cb_args)
          } catch (error) {
            console.error('Error in parallax callback:', error)
          }
        }
      } catch (error) {
        console.error('Error in parallax scroll evaluation:', error)
      }
    }

    // Оптимизированный обработчик прокрутки с throttle
    const throttledHandleScroll = throttle(evaluateScroll, 16) // ~60fps

    // Инициализация
    evaluateScroll()

    // Добавляем обработчик события прокрутки
    const handleScroll = () => throttledHandleScroll()

    if (scrollElement === window) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    } else {
      scrollElement.addEventListener('scroll', handleScroll, { passive: true })
    }

    // Сохраняем функцию очистки
    el._cleanup = () => {
      if (scrollElement === window) {
        window.removeEventListener('scroll', handleScroll)
      } else {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  },

  unmounted(el) {
    // Удаляем обработчики событий при размонтировании
    if (el._cleanup) {
      el._cleanup()
    }
  },

  name: 'parallax',
}

// Вспомогательные функции
function throttle(func, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

function validateCssKey(key) {
  const validKeys = ['backgroundPosition', 'transform', 'top', 'left']
  return validKeys.includes(key) ? key : 'backgroundPosition'
}

function validateCssProperty(prop) {
  const validProps = [
    'backgroundPositionY',
    'backgroundPositionX',
    'translateY',
    'translateX',
  ]
  return validProps.includes(prop) ? prop : 'backgroundPositionY'
}

function validateRatio(ratio) {
  const num = Number(ratio)
  return !isNaN(num) ? num : -0.7
}

function validateCssUnit(unit) {
  const validUnits = ['px', '%', 'em', 'rem', 'vh', 'vw']
  return validUnits.includes(unit) ? unit : 'px'
}

function validateScrollElement(element) {
  return element instanceof Element ? element : null
}

function validateParallaxElement(element) {
  return element instanceof Element ? element : null
}
