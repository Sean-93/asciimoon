const metaBrowserFix = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Consolidated condition
    if (/android/i.test(userAgent) && (userAgent.includes('FBAN') || userAgent.includes('FBAV') || userAgent.includes('Instagram'))) {
        document.querySelectorAll("pre").forEach(function (element) {
            element.style.transform = "scale(0.1)";
        });
    }
};

// Running the detection function
metaBrowserFix();
