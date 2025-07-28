document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic Validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const summary = document.getElementById('summary').value.trim();
  const skills = document.getElementById('skills').value.trim();
  const education = document.getElementById('education').value.trim();
  const experience = document.getElementById('experience').value.trim();

  if (name.length < 3 || !email || phone.length !== 10 || !summary || !skills || !education || !experience) {
    alert("Please fill all fields correctly.");
    return;
  }

  // Populate Resume Template
  document.getElementById('r-name').textContent = name;
  document.getElementById('r-email').textContent = email;
  document.getElementById('r-phone').textContent = phone;
  document.getElementById('r-summary').textContent = summary;
  document.getElementById('r-education').textContent = education;
  document.getElementById('r-experience').textContent = experience;

  const skillsArray = skills.split(',').map(skill => skill.trim());
  const skillList = document.getElementById('r-skills');
  skillList.innerHTML = '';
  skillsArray.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillList.appendChild(li);
  });

  // Show Resume
  document.getElementById('resume').classList.remove('hidden');
  // Optional: Scroll to resume
  document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
});
