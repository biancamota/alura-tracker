import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefa from "../views/Tarefa.vue";
import Projeto from "../views/Projeto.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefa
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projeto
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;