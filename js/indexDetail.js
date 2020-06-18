import { setToFavorite, getById, deleteById } from './db.js';
import { getDetailTimById, getFavoriteDetailtim } from './api.js';
import { registerServiceWorker, requestPermission } from './serviceworkerRegister.js';

document.addEventListener("DOMContentLoaded", function() {
    let urlParams = new URLSearchParams(window.location.search);
    let isFavorite = urlParams.get("favorite");
    let idParam = urlParams.get("id");

    // REGISTER SERVICE WORKER
    if ("serviceWorker" in navigator) {
        registerServiceWorker();
        requestPermission();
    } else {
        console.log(" ServiceWorker is not yet supported by this browser.");
    }

    if (isFavorite) {
        $('.sidenav-trigger').attr('href', '/#favorite');
        $('.btn-floating').attr('id', 'delete');
        $('.btn-floating').html('<i class="large material-icons" style="color:yellow;">favorite</i>');
        getFavoriteDetailtim();
        $('#delete').click(function() {
            deleteById(idParam).then(function(data) {
                console.log(data);
                $('.btn-floating').html('<i class="large material-icons"> <i class="large material-icons">favorite_border</i></i>');
                M.toast({ html: 'delete from favorite success!' });
                window.location.href = '/#favorite';
            })
        })
    } else {
        let item = getDetailTimById();
        getById(idParam).then(function(data) {
            if (data !== undefined) {
                $('.btn-floating').attr('id', 'delete');
                $('.btn-floating').html('<i class="large material-icons" style="color:yellow;">favorite</i>');
                $('#delete').click(function() {
                    if ($(this).attr('id') !== 'delete') {
                        console.log("Tombol FAB di klik.");
                        item.then(function(listteam) {
                            setToFavorite(listteam);
                            $('.btn-floating').attr('id', 'delete');
                            $('.btn-floating').html('<i class="large material-icons" style="color:yellow;">favorite</i>');
                            M.toast({ html: 'set to favorite success!' });
                        });
                    } else {
                        deleteById(idParam).then(function(data) {
                            console.log(data);
                            $('.btn-floating').attr('id', 'save');
                            $('.btn-floating').html('<i class="large material-icons"> <i class="large material-icons">favorite_border</i></i>');
                            M.toast({ html: 'delete from favorite success!' });
                        })
                    }
                });
            } else {
                $('#save').click(function() {
                    if ($(this).attr('id') !== 'delete') {
                        console.log("Tombol FAB di klik.");
                        item.then(function(listteam) {
                            setToFavorite(listteam);
                            $('.btn-floating').attr('id', 'delete');
                            $('.btn-floating').html('<i class="large material-icons" style="color:yellow;">favorite</i>');
                            M.toast({ html: 'set to favorite success!' });
                        });
                    } else {
                        deleteById(idParam).then(function(data) {
                            console.log(data);
                            $('.btn-floating').attr('id', 'save');
                            $('.btn-floating').html('<i class="large material-icons"> <i class="large material-icons">favorite_border</i></i>');
                            M.toast({ html: 'delete from favorite success!' });
                        })
                    }
                });
            }
        });
    }
});