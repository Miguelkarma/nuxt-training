export default defineNuxtRouteMiddleware((to) => {
  // const isLoggedIn = false;
  // // Only redirect to /profile if you're not already there
  // if (!isLoggedIn && to.path !== "/profile") {
  //   return navigateTo("/profile");
  // }
  console.log("hello from middleware auth.global.ts");
});
