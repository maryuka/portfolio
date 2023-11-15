
<template>
    <v-sheet class="contact_sheet" id="Contact">
        <v-container class="contact_box py-16 my-16">
            <h1 class="title is_en">お問い合わせ</h1>
            <v-sheet class="mx-auto pt-16 form">
                <form action="https://portfolio-806585.form.newt.so/v1/Cscg-Svnh" method="post">
                    <div class="form_item">
                        <p class="form_item_label">
                            <span class="form_item_label_required">必須</span><label for="name">氏名</label>
                        </p>
                        <input id="name" name="name" class="form_item_input" required>
                    </div>
                    <div class="form_item">
                        <p class="form_item_label">
                            <span class="form_item_label_required">必須</span><label for="email">メールアドレス</label>
                        </p>
                        <input id="email" name="email" type="email" class="form_item_input" required>
                    </div>
                    <div class="form_item">
                        <p class="form_item_label isMsg">
                            <span class="form_item_label_required">必須</span><label for="message">お問い合わせ内容</label>
                        </p>
                        <textarea id="message" name="message" class="form_item_textarea" required></textarea>
                    </div>
                    <v-btn type="submit" class="form_btn mx-auto d-block mt-3">
                        送信する
                    </v-btn>
                </form>
            </v-sheet>


        </v-container>
    </v-sheet>
</template>

<style  scoped>
.contact_sheet {
    height: 100%;
}

.contact_box {
    width: 960px;
}

.form {
    max-width: 720px;
}


@media screen and (max-width: 960px) {
    .form {
        max-width: 500px;
    }

}

.form_item {
    border-top: 1px solid #ddd;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
}

@media screen and (max-width: 960px) {
    .form_item {
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 16px;
        padding-bottom: 16px;
        display: block;
    }

}

.form_item:nth-child(5) {
    border-bottom: 1px solid #ddd;
}

.form_item_label {
    width: 100%;
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
}

.form_item_label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
}

.form_item_label_required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 48px;
    display: inline-block;
    text-align: center;
    background: #a7bcf3;
    color: #fff;
    font-size: 14px;
}

.form_item_input {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 48px;
    flex: 1;
    width: 100%;
    max-width: 500px;
    background: #f8f9ff;
    font-size: 18px;
}

@media screen and (max-width: 960px) {
    .form_item_input {
        margin-left: auto;
        margin-right: auto;
        margin-top: 18px;
        height: 40px;
        flex: inherit;
    }
}

.form_item_textarea {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 216px;
    flex: 1;
    width: 100%;
    max-width: 500px;
    background: #f8f9ff;
    font-size: 18px;
}

@media screen and (max-width: 960px) {
    .form_item_textarea {
        margin-top: 18px;
        margin-left: 0;
        height: 200px;
        flex: inherit;
    }
}

.form_btn {
    width: 200px;
    height: 50px;
    background-color: #a7bcf3;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
}

@media screen and (max-width: 1280px) {
    .contact_box {
        width: 700px;
    }
}

@media screen and (max-width: 960px) {
    .contact_box {
        width: 80vw;
    }

}
</style>
