<script>
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const percentage = circle.getAttribute("data-percent");
        circle.style.background = `
            conic-gradient(#ff9900 ${percentage}%, #ddd ${percentage}%)
        `;
    });
});
</script>
