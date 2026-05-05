
(function() {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    body > header.header,
    body > nav.navbar:not(.shared-navbar),
    body > .nav {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      overflow: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
    }
    
    .navbar-actions {
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      flex-shrink: 0 !important;
    }
    
    .navbar-username {
      padding: 8px 14px !important;
      background: #f7f2ff !important;
      border: 1px solid rgba(124,94,167,0.16) !important;
      border-radius: 999px !important;
      color: #362e6f !important;
      font-size: 13px !important;
      font-weight: 600 !important;
    }
    
    .navbar-logout,
    .navbar-login {
      padding: 9px 18px !important;
      border-radius: 999px !important;
      font-size: 13px !important;
      font-weight: 700 !important;
      border: 1px solid transparent !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      text-decoration: none !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    .navbar-logout {
      background: #fff1f2 !important;
      color: #b91c1c !important;
      border-color: rgba(220,38,38,0.15) !important;
    }
    
    .navbar-login {
      background: linear-gradient(135deg, #7c3aed, #a855f7) !important;
      color: #fff !important;
    }
    
    .navbar-logout:hover {
      background: #fee2e2 !important;
    }
    
    .navbar-login:hover {
      transform: translateY(-1px) !important;
      box-shadow: 0 10px 24px rgba(124,94,167,0.25) !important;
    }
    
    @media (max-width: 960px) {
      .navbar-wrapper {
        padding: 10px 16px !important;
      }
      
      .navbar {
        flex-wrap: wrap !important;
        justify-content: center !important;
        gap: 12px !important;
      }
      
      .navbar-links {
        order: 3 !important;
        width: 100% !important;
        justify-content: center !important;
        flex-wrap: wrap !important;
      }
      
      .navbar-actions {
        order: 2 !important;
      }
      
      .navbar-logo {
        order: 1 !important;
      }
    }
    
    @media (max-width: 680px) {
      .navbar {
        padding: 10px 14px !important;
      }
      
      .navbar-links {
        gap: 6px !important;
      }
      
      .navbar-link {
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      
      .navbar-logo span {
        display: none !important;
      }
    }
    
    body.has-navbar {
      padding-top: 86px !important;
    }
  `;
  document.head.appendChild(style);

  function getNavbarHTML() {
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.includes('home') || currentPath.includes('index');
    const isSetup = currentPath.includes('setup');
    const isAptitude = currentPath.includes('aptitude');
    const isInterview = currentPath.includes('interview');
    const isHR = currentPath.includes('hr');
    const isProgress = currentPath.includes('progress');
    
    return `
      <div id="aptly-shared-navbar" class="navbar-wrapper">
        <nav class="navbar shared-navbar">
          <a href="/home.html" class="navbar-logo">
            <div class="navbar-logo-icon">A</div>
            <span>Aptly</span>
          </a>
          
          <div class="navbar-links">
            <a href="/home.html" class="navbar-link ${isHome ? 'active' : ''}">Home</a>
            <a href="/setup.html" class="navbar-link ${isSetup ? 'active' : ''}">Setup</a>
            <a href="/aptitude.html" class="navbar-link ${isAptitude ? 'active' : ''}">Aptitude</a>
            <a href="/interview.html" class="navbar-link ${isInterview ? 'active' : ''}">Technical</a>
            <a href="/hr.html" class="navbar-link ${isHR ? 'active' : ''}">HR</a>
            <a href="/progress.html" class="navbar-link ${isProgress ? 'active' : ''}">Progress</a>
          </div>
          
          <div class="navbar-actions" id="navbarUserSection">
            <!-- User info will be injected here -->
          </div>
        </nav>
      </div>
    `;
  }

  function injectNavbar() {
    if (window.location.pathname.includes('login') || window.location.pathname.includes('signup')) {
      return;
    }

    document.querySelectorAll('nav.navbar').forEach((nav) => {
      if (!nav.classList.contains('shared-navbar')) {
        nav.remove();
      }
    });

    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = getNavbarHTML();
    document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstChild);
    document.body.classList.add('has-navbar');
    
    updateUserSection();
  }

  function updateUserSection() {
    const userSection = document.getElementById('navbarUserSection');
    if (!userSection) return;
    
    const userData = localStorage.getItem('aptly_user') || localStorage.getItem('aptlyUser');
    
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const userName = user.name || user.email || user.id || 'User';
        const displayName = userName.length > 12 ? userName.substring(0, 12) + '...' : userName;
        
        userSection.innerHTML = `
          <div class="navbar-username">${displayName}</div>
          <button class="navbar-logout" onclick="handleLogout()">Logout</button>
        `;
      } catch (e) {
        userSection.innerHTML = `
          <a href="/setup.html" class="navbar-login">Get Started</a>
        `;
      }
    } else {
      userSection.innerHTML = `
        <a href="/setup.html" class="navbar-login">Get Started</a>
      `;
    }
  }

  window.handleLogout = function() {
    localStorage.removeItem('aptly_user');
    localStorage.removeItem('aptlyUser');
    localStorage.removeItem('aptly_setup');
    window.location.href = '/home.html';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
})();
