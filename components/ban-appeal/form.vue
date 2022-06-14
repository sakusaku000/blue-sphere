<template>
    <Card class="md:-mx-6">
        <form @submit.prevent="sendForm" v-if="!sendingStatus.hideForm">

            <!-- discord name -->
            <label for="discord-name">discord username and tag</label>
            <input type="text" name="discord-name" placeholder="username#0000" v-model="formData.discordName" required>

            <!-- appeal reason -->
            <label for="appeal-reason">appeal reason</label>
            <textarea name="appeal-reason" placeholder="please explain your reason to appeal the ban" rows="5" v-model="formData.reason" required/>

            <!-- submit / reset -->
            <div class="flex justify-end gap-3">
                <button type="reset" class="reset"><IconsTrash class="w-5"/></button>
                <button type="submit"><IconsSend class="w-5"/></button>
            </div>
            
        </form>

        <!-- if sending -->
        <div v-if="sendingStatus.sending">
            <p>your appeal is being sent to our staff...</p>
        </div>

        <!-- if sent -->
        <div v-if="sendingStatus.sent">
            <p>your appeal has been sent to our staff.</p>
            <p>a staff member may try to friend request you via discord to discuss your appeal.</p>
        </div>

        <!-- if error -->
        <div v-if="sendingStatus.error">
            <p>an error occurred sending your appeal, please check back later.</p>
        </div>
    </Card>
</template>

<script>
import axios from 'axios';

export default {
    name:"BanAppealForm",
    data() {
        return {
            formData:{
                discordName:"",
                reason:""
            },
            sendingStatus:{
                hideForm:false,
                sending:false,
                sent:false,
                error:null
            }
        }
    },
    methods:{
        async sendForm() {
            this.sendingStatus.hideForm = true;
            this.sendingStatus.sending = true;
            try {
                await axios.post("/api/ban-appeal", {
                    username:this.formData.discordName,
                    reason:this.formData.reason
                });
                this.sendingStatus.sending = false;
                this.sendingStatus.sent = true;
            } catch (err) {
                this.sendingStatus.sending = false;
                this.sendingStatus.error = "an error occurred sending this form - try again later";
                console.error(err);
            };
        }
    }
}
</script>

<style scoped>
    input, textarea {
        @apply appearance-none p-2 mt-1 mb-2 bg-gray-100 rounded w-full ring-1 ring-gray-400 focus:ring-2 focus:bg-gray-50 duration-100;
        outline:none;
    }
    label {
        @apply text-sm
    }
    button {
        @apply py-2 px-4 rounded-lg bg-brand-light hover:bg-brand-dark duration-100
    }
    .reset {
        @apply bg-transparent hover:bg-gray-200 text-sm;
    }
</style>