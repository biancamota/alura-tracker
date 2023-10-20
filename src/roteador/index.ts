import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefa from '../views/Tarefa.vue'
import Projeto from '../views/Projeto.vue'
import Formulario from '../views/projeto/Formulario.vue'
import Lista from '../views/projeto/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefa
    },
    {
        path: '/projetos',
        component: Projeto,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: Formulario,
                props: true
            },
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;