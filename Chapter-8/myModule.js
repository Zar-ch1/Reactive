// console.log('Hello');
//IIFE(immedately invoking function expression)
window.myModule = window.myModule || (function(){
    console.log('Module Loaded');
    function api()
    {
        console.log('API');
    }
    return {
        api
    };
})();  
// console.log('module===>', window.myModule);