<template>
	<div class="section noselect">
		<h2 class="section-category">
			<slot name="category" class="section-category"></slot>
		</h2>
		<h3 class="section-title">
			<slot name="title" class="section-title"></slot>
		</h3>
	</div>
</template>

<script>
export default {
	name: 'section-title',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globals.scss";
.section{
	text-align: left;
	&-category {
	@include font-mobile(16, #F2BE22, "regular");
	}
	&-title {
	@include font-mobile(24, $color-dark-gray, "extrabold");
	}
	@media (width>640px){
		&-category {
			@include font-tablet(16, false, false);
		}
		&-title {
			@include font-tablet(24, false, false);
		}
	}
	@media (width>1024px){
		&-category {
			@include font-desktop(24, false, false);
		}
		&-title {
			@include font-desktop(24, false, false);
			&:hover{
				color: #F2BE22;
				transition: 0.3s ease-in-out;
			}
		}
	}
}
</style>
