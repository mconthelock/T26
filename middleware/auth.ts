export default defineNuxtRouteMiddleware((to, from) => {
    const token =  useCookie('token')
    console.log(token);
    if (!token) {
        return navigateTo('/');
    }
});