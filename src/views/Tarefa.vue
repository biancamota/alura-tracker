<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia"> Você não está muito produtivo hoje :( </Box>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import Formulario from "../components/FormularioComponent.vue";
import Tarefa from "../components/TarefaComponent.vue";
import Box from "../components/BoxComponent.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "TarefaView",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>
  
<style>
.lista {
  padding: 1.25rem;
}
</style>
  