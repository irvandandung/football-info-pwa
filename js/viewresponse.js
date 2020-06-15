const showListTeam = (data, listHTML, isFavorite = false) => {
    let href;
    if (!isFavorite) {
        data = data.teams;
        href = '';
    } else {
        data = data;
        href = `&favorite=${true}`;
    }
    if (data.length > 0) {
        data.forEach((listTim) => {
            listHTML += `
        <div class="col s12 m6 l3">
            <div class="card" style="min-height:500px;">
                <div class="card-image">
                    <img height="150px" width="150px" src="${listTim.crestUrl}">
                </div>
                <div class="card-content">
                    <center><span class="card-title activator grey-text text-darken-4">${listTim.name}</span></center>
                    <p><b>Address</b></p>
                    <p>${listTim.address}</p><br>
                    <p><b>Venue</b></p>
                    <p>${listTim.venue}</p><br>
                </div>
                <div class="card-action">
                    <center><a href="./pages/detailtim.html?id=${listTim.id}${href}">Detail TIM</a></center>
                </div>
            </div>
        </div>
        `
        });
    } else {
        listHTML += `<p style="color:red">Your Favorite team is empty. Please choose in List Team !`;
    }
    $('#listtim').html(listHTML);
}


const showDetailTeam = (data, detailHTML) => {
    detailHTML += `
                    <div class='row' id="timinfo">
                        <div class="col s12 m4 l3">
                            <center><img src="${data.crestUrl}"/>
                            <h4>${data.name}</h4></center>
                        </div>
                        <div class="col s12 m8 l9" > 
                        <table>     
                            <p>
                                <tr><td><b>Short Name</b></td><td>:</td><td>${data.shortName}</td></tr>
                                <tr><td><b>Address</b></td><td>:</td><td>${data.address}</td></tr>
                                <tr><td><b>Venue</b></td><td>:</td><td>${data.venue}</td></tr>
                                <tr><td><b>Website</b></td><td>:</td><td>${data.website}</td></tr>
                                <tr><td><b>Email</b></td><td>:</td><td>${data.email}</td></tr>
                                <tr><td><b>Phone</b></td><td>:</td><td>${data.phone}</td></tr>
                            <p>
                        </table>
                        </div>
                    </div>
                    <div class="row">
                `;
    data.squad.forEach((listSquad) => {
        detailHTML += `
                        <div class="col s12 m6 l3">
                            <div class="card" style="min-height:600px;">
                                <div class="card-content">
                                    <center><span style="maring-bottom:30px;" class="card-title activator grey-text text-darken-4">${listSquad.name}</span></center><br>
                                        <p><b>Country of Birth</b></p>
                                        <p>${listSquad.countryOfBirth}</p><br>
                                        <p><b>Date of Birth</b></p>
                                        <p>${listSquad.dateOfBirth}</p><br>
                                        <p><b>Nasionality</b></p>
                                        <p>${listSquad.nationality}</p><br>
                                        <p><b>Position</b></p>
                                        <p>${listSquad.position}</p><br>
                                        <p><b>Role</b></p>
                                        <p>${listSquad.role}</p><br>
                                        <p><b>Shirt Number</b></p>
                                        <p>${listSquad.shirtNumber}</p><br>
                                    <p>
                                </div>
                            </div>
                        </div>
                    `
    });
    detailHTML += `</div>`;
    $('#body-content').html(detailHTML);
}

const showStandings = (data, listHTML) => {
    listHTML += `
    <table class="responsive-table centered">
        <thead>
            <tr>
                <th>Position</th>
                <th height="90">Team</th>
                <th>Points</th>
                <th>Played Games</th>
                <th>Won</th>
                <th>Draw</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GD</th>
                <th>GA</th>
            </tr>
        </thead>

        <tbody>
    `;
    data.standings[0].table.forEach((standing) => {
        console.log(standing);
        listHTML += `
        <tr>
            <td>${standing.position}</td>
            <td><img height='8%' width='12%' src='${standing.team.crestUrl}'</img><br>${standing.team.name}</td>
            <td>${standing.points}</td>
            <td>${standing.playedGames}</td>
            <td>${standing.won}</td>
            <td>${standing.draw}</td>
            <td>${standing.lost}</td>
            <td>${standing.goalsFor}</td>
            <td>${standing.goalDifference}</td>
            <td>${standing.goalsAgainst}</td>
        </tr>
        `;
    });

    listHTML += `</tbody></table>`;

    $('#standings').html(listHTML);
}

export {
    showListTeam,
    showDetailTeam,
    showStandings
}