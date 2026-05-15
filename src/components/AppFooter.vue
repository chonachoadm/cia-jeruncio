<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <section id="footer">
        <div class="d-flex flex-column justify-content-center align-items-center footer">
            <h5>© {{ new Date().getFullYear() }} <strong>{{ $t('footer.company') }}</strong></h5>
            <p class="m-0">
                {{ $t('footer.design') }}
            </p>
        </div>
    </section>
</template>

<style scoped>
.footer {
    padding: 2em 1em;
    margin-inline: 3em;
    border-top: 1em dotted var(--yellow-color);
}
</style>