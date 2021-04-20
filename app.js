requirejs.config({
    baseUrl: 'scripts',
    paths: {
        popper: ['https://unpkg.com/@popperjs/core@2', 'js/popper.js'],
        jquery: ['https://code.jquery.com/jquery-3.6.0.min' , 'jquery.min'],
        bootstrap: ['https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.m in' , '/bootstrap/js/bootstrap.min']
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
}); 