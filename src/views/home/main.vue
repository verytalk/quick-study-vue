<template>
    <div>
        <div class="ms-doc">
            <h3>README.md</h3>
            <article>
                <h1>Quick Study</h1>
            </article>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.ms-doc {
    width: 100%;
    max-width: 980px;
    font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
    color: #2d2f33;
}
.ms-doc h3 {
    padding: 9px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    background-color: #f5f5f5;
    border: 1px solid #d8d8d8;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
}
.ms-doc article {
    padding: 45px;
    word-wrap: break-word;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.ms-doc article h1 {
    font-size: 32px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
}
.ms-doc article h2 {
    margin: 24px 0 16px;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 7px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
}
.ms-doc article p {
    margin-bottom: 15px;
    line-height: 1.5;
}
.ms-doc article .el-checkbox {
    margin-bottom: 5px;
}
</style>
