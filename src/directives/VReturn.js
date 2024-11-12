/* eslint-disable */
import { render, cloneVNode} from 'vue'

export default {

	mounted(el, bind, vNode) {
		let isActive= false;
		const listener = el.addEventListener('click', ()=>{
			isActive = true;
			const copy = cloneVNode(
				vNode, 
				{
				class: bind.value, 
				style:{
					background: 'red',
				},
					isActive:isActive,
				mounted(){
					this.isActive = true;
				}
			},
		);
		copy.dynamicProps = {isActive};
		copy.dirs = [];
			render(copy, el);
			console.log(copy);
		})
	},
	name: 'return',
};
