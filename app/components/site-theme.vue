<template>
    <div>
        <div class="uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
            <div>
                <h2 class="uk-h3 uk-margin-remove">
                    {{ 'Theme' | trans }}
                </h2>
            </div>
            <div class="uk-margin-small">
                <button class="uk-button uk-button-primary" type="submit">
                    {{ 'Save' | trans }}
                </button>
            </div>
        </div>

        <div class="uk-form uk-form-horizontal">
            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Avatar' | trans }}</label>
                <div class="uk-form-controls">
                    <input-image v-model="config.avatar_img" input-class="uk-form-width-large" />
                    <div class="uk-text-meta">
                        {{ 'Select an alternative logo which looks great on images.' | trans }}
                    </div>
                </div>
            </div>
            
            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Name' | trans }}</label>
                <div class="uk-form-controls">
                    <input type="text" class="uk-input" v-model="config.name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label">{{ 'Description' | trans }}</label>
                <div class="uk-form-controls">
                    <input type="text" class="uk-input" v-model="config.description">
                </div>
            </div>

            <div>
                <label class="uk-form-label">{{'Social Media' | trans}} <a @click="addSocial">{{'Add' | trans}}</a></label>
                <div class="uk-margin uk-form-controls">
                    <div class="uk-grid-small" v-for="(social , id) in config.socials" :key="id" uk-grid >
                        <div class="uk-width-medium@m">
                            <input type="text" class="uk-input uk-width-expand" :placeholder="'Social Media Title' | trans" v-model="social.title" required>
                        </div>
                        <div class="uk-width-expand@m">
                            <input type="text" class="uk-input uk-width-expand" :placeholder="'Link' | trans" v-model="social.uri" required>
                        </div>
                        <div class="uk-width-auto@m">
                            <a class="uk-button uk-button-default uk-button-small" @click="removeSocial(id)">{{'Remove' | trans}}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label">{{'Disques Code'| trans}}</label>
                <div class="uk-form-controls">
                    <textarea v-model="config.disqus_code" class="uk-width-expand uk-height-large"></textarea>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

var SiteTheme = {

    section: {
        label: 'Theme',
        icon: 'pk-icon-large-brush',
        priority: 15,
    },

    data() {
        return _.extend({ config: {} }, window.$theme);
    },

    methods:{
        addSocial()
        {
            this.config.socials.push({
                title:'',
                uri:''
            })
        },

        removeSocial(id)
        {
            if(this.config.socials.length == 1){
                this.$notify(this.$trans('Can Not Remove') , 'danger')
                return;
            }
            this.config.socials.splice(id , 1)
        }
    },

    events: {

        'save:settings': function() {
            this.$http.post('admin/system/settings/config', { name: this.name, config: this.config }).catch(function (res) {
                this.$notify(res.data, 'danger');
            });
        },

    },

};

export default SiteTheme;

window.Site.components['site-theme'] = SiteTheme;

</script>
