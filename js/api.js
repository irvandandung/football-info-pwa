import { getAllteam, getById } from './db.js';
import { showListTeam, showDetailTeam, showStandings } from './viewresponse.js';

const base_url = "https://api.football-data.org/v2/";
const API_KEY = "45fde3c7f6ec4397ab50d26561781213";

const status = (response) => {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}

const json = (response) => {
    return response.json();
}

const error = (error) => {
    console.log(`Error ${error}`);
}

//fuction for getListTim EPL
const getListTim = _ => {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/teams`).then((response) => {
            let listHTML = '';
            if (response) {
                response.json().then((data) => {
                    showListTeam(data, listHTML);
                })
            }
        });
    }

    fetch(`${base_url}competitions/2021/teams`, {
            method: "GET",
            headers: {
                "X-Auth-Token": API_KEY
            }
        })
        .then(status)
        .then(json)
        .then((data) => {
            let listHTML = '';
            showListTeam(data, listHTML);
        })
        .catch(error);
}

const getDetailTimById = _ => {
    return new Promise(function(resolve, rejected) {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");

        if ('caches' in window) {
            caches.match(`${base_url}teams/${idParam}`).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        let detailHTML = '';
                        resolve(data);
                        showDetailTeam(data, detailHTML);
                    })
                }
            });
        }

        fetch(`${base_url}teams/${idParam}`, {
                method: "GET",
                headers: {
                    "X-Auth-Token": API_KEY
                }
            })
            .then(status)
            .then(json)
            .then((data) => {
                let detailHTML = '';
                resolve(data);
                showDetailTeam(data, detailHTML);
            }).catch(error);
    });
}

const getFavoriteteam = _ => {
    let listHTML = '';
    getAllteam().then((data) => {
        showListTeam(data, listHTML, true);
    });
}

const getFavoriteDetailtim = _ => {
    let detailHTML = '';
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    getById(idParam).then((data) => {
        showDetailTeam(data, detailHTML);
    })
}

const getStanding = _ => {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/2021/standings`).then(function(response) {
            if (response) {
                response.json().then((data) => {
                    let listHTML = '';
                    showStandings(data, listHTML);
                });
            }
        });
    }

    fetch(`${base_url}competitions/2021/standings`, {
            method: "GET",
            headers: {
                "X-Auth-Token": API_KEY
            }
        })
        .then(status)
        .then(json)
        .then((data) => {
            let listHTML = '';
            showStandings(data, listHTML);
        })
        .catch(error);
}

export {
    getListTim,
    getDetailTimById,
    getFavoriteteam,
    getFavoriteDetailtim,
    getStanding
}