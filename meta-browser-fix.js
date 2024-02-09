const metaBrowserFix = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Consolidated condition
    if (/android/i.test(userAgent) && (userAgent.includes('FBAN') || userAgent.includes('FBAV') || userAgent.includes('Instagram'))) {
        const moonContainer = document.getElementById("moonContainer");

        moonContainer.style.transform = "scale(0.333)";
        moonContainer.style.margin = "-95%";
        moonContainer.style.marginBottom = "-85%";
    }
};

// Running the detection function
metaBrowserFix();
