// script.js
document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('register-modal').style.display = 'none';
});

// Handle form submissions
document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const teamCode = document.getElementById('team-code').value;
    // Logic to join a team using the team code
    alert(`Joining team with code: ${teamCode}`);
    document.getElementById('register-modal').style.display = 'none';
});

document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const teamName = document.getElementById('team-name').value;
    const teamLeaderName = document.getElementById('team-leader-name').value;
    const teamLeaderMobile = document.getElementById('team-leader-mobile').value;
    const teamLeaderEmail = document.getElementById('team-leader-email').value;
    const teamLeaderCollege = document.getElementById('team-leader-college').value;
    const members = Array.from(document.querySelectorAll('#members .member')).map(member => {
        return {
            name: member.querySelector('input[name="member-name[]"]').value,
            mobile: member.querySelector('input[name="member-mobile[]"]').value,
            email: member.querySelector('input[name="member-email[]"]').value,
            college: member.querySelector('input[name="member-college[]"]').value
        };
    });

    if (members.length > 4) {
        alert('Team size limit is 4 members.');
        return;
    }

    // Generate 7-letter alphanumeric code
    const teamCode = generateTeamCode();
    alert(`Team created successfully! Your team code is: ${teamCode}`);
    document.getElementById('register-modal').style.display = 'none';
});

function generateTeamCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 7; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Add new member input fields
document.getElementById('add-member').addEventListener('click', function() {
    const membersContainer = document.getElementById('members');
    if (membersContainer.children.length < 4) {
        const newMember = document.createElement('div');
        newMember.classList.add('member');
        newMember.innerHTML = `
            <input type="text" name="member-name[]" placeholder="Member Name">
            <input type="tel" name="member-mobile[]" placeholder="Member Mobile">
            <input type="email" name="member-email[]" placeholder="Member Email">
            <input type="text" name="member-college[]" placeholder="Member College">
        `;
        membersContainer.appendChild(newMember);
    } else {
        alert('You can only add up to 4 members.');
    }
});
