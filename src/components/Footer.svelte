<script>
    let year = new Date().getFullYear();
</script>

<footer class="footer">
    <p>&copy;{year} Muhtalip Dede | All Rights Reserved</p>
</footer>

<style>
    .footer {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: flex-end;
        padding: 1rem 2rem;
        background-color: #011633;
        border: 1px solid #000;
        z-index: 1;
    }

    .footer p {
        color: #fff;
        margin: 15px 0 10px 0;
        font-size: 1rem;
        font-weight: 300;
    }
</style>
