let dbPromised =
    idb.open("list-team", 1, (upgradeDb) => {
        let teamObjectStore = upgradeDb.createObjectStore("listteam", {
            keyPath: "id"
        });
        teamObjectStore.createIndex("shortName", "shortName", { unique: false });
    });

const setToFavorite = (team) => {
    dbPromised
        .then(function(db) {
            let tx = db.transaction("listteam", "readwrite");
            let store = tx.objectStore("listteam");
            console.log(team);
            store.put(team);
            return tx.complete;
        })
        .then(function() {
            console.log("List Tim berhasil di simpan.");
        });
}

const getAllteam = _ => {
    return new Promise((resolve, reject) => {
        dbPromised
            .then(function(db) {
                let tx = db.transaction("listteam", "readonly");
                let store = tx.objectStore("listteam");
                return store.getAll();
            })
            .then(function(team) {
                resolve(team);
            });
    });
}

const getById = (id) => {
    return new Promise((resolve, reject) => dbPromised
        .then(function(db) {
            let tx = db.transaction("listteam", "readonly");
            let store = tx.objectStore("listteam");
            return store.get(parseInt(id));
        })
        .then(function(team) {
            console.log(team);
            resolve(team);
        })
    );
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => dbPromised
        .then(function(db) {
            let tx = db.transaction("listteam", "readwrite");
            let store = tx.objectStore("listteam");
            return store.delete(parseInt(id));
        })
        .then(function() {
            resolve('success delete');
        })
    );
}

export {
    setToFavorite,
    getAllteam,
    getById,
    deleteById
}