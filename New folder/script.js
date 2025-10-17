// Enhanced PWA functionality
A() 
    // Register service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                    this.checkInstallPrompt();
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Check if app is already installed
    window.addEventListener('appinstalled', (evt) => {
        console.log('App was installed');
        document.getElementById('installBtn').style.display = 'none';
        this.showToast('RetailerPro installed successfully!', 'success');
    });

    this.checkInstallPrompt();


checkInstallPrompt() 
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt fired');
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        // Show the install button
        document.getElementById('installBtn').style.display = 'flex';
        
        this.showToast('RetailerPro can be installed as an app! Click "Install App"', 'info');
    });

    // Store for later use
    window.deferredPrompt = deferredPrompt;


installApp() 
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                this.showToast('Installing RetailerPro...', 'success');
            } else {
                console.log('User dismissed the install prompt');
            }
            window.deferredPrompt = null;
            document.getElementById('installBtn').style.display = 'none';
        });
    } else {
        this.showToast('Installation not available. Try refreshing the page.', 'warning');
    }
