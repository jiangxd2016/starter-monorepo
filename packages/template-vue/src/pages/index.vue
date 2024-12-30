<script setup lang="ts">
import Counter from '@/components/Counter';

const name = ref('');
const IndexRef = ref<HTMLElement>();

onMounted(() => {
  console.info(IndexRef.value?.innerHTML);
});

const router = useRouter();
const go = () => {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`);
  }
};
</script>

<template>
  <div ref="IndexRef" class="wrapper" @mouseenter="()=>name ='123'" @mouseleave="()=>name =''" :style="{
    color:name === '123' ? 'red' : 'black'
  }">

    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>
    <p>{{ name }}</p>



  </div>
</template>
