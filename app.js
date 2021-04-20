requirejs.config({
    baseUrl: 'scripts',
    paths: {
        popperjs: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min',
        jquery: ['https://code.jquery.com/jquery-3.6.0.min' , 'jquery.min'],
        bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min' ,
    },
});
require(['popperjs','bootstrap'], function(){
    console.log("require function is called.");
});