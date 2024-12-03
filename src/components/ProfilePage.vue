<template>
    <div>
        <h1>个人资料</h1>
        <div class="profile">
            <div class="profile-avatar">
                <img :src="user.avatar" alt="avatar" />
            </div>
            <div class="profile-info">
                <div class="profile-name">{{ user.name }}</div>
                <div class="profile-email">{{ user.email }}</div>
                <div class="profile-phone">{{ user.phone }}</div>
            </div>
        </div>
    </div>
</template>

<script>
// export ProfilePage component
export default {
    name: 'ProfilePage',
    data() {
        return {
            user: {
                name: '张三',
                email: '666',
                phone: '666',
                avatar: 'https://cdn.jsdelivr.net/gh/lin09/dist/img/avatar.jpg'
            }
        };
    },
};
</script>








