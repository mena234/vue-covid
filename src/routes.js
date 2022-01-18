import { createWebHistory, createRouter } from "vue-router";
import TestingDashboard from "@/pages/TestingDashboard.vue";
import TravelAuthDashboard from '@/pages/TravelAuthDashboard'
import VaccineDashboard from '@/pages/VaccineDashboard'

const routes = [
  {
    path: "/testing-dashboard",
    name: "Testing Dashboard",
    component: TestingDashboard,
  },
  {
    path: "/travel-auth-dashboard",
    name: "Travel Auth Dashboard",
    component: TravelAuthDashboard,
  },
  {
    path: "/vaccine-dashboard",
    name: "Vaccine Dashboard",
    component: VaccineDashboard,
  },
  {
    path: "/",
    redirect: {
        name: "Vaccine Dashboard"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;