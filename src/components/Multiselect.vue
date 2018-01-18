<template>
    <div>
        <dropdown :not-close-elements="ele" ref="dropdown">
            <div class="form-control select-el">
                {{ selectedTextFormatted }} <span class="caret"></span>
            </div>
            <template slot="dropdown">
                <li v-for="(entry, index) in entries">
                    <input
                            type="checkbox"
                            :name="inputNamePrefix + '[' + index + ']'"
                            :id="'entry' + index"
                            class="css-checkbox"
                            :value="entry.value"
                            v-model="entriesChecked"
                            @click="log()"
                    >
                    <label :for="'entry' + index" class="css-checkbox-label">
                        {{ entry.title }}
                    </label>
                </li>
            </template>
            <template slot="footer">
                'IS THIS FOOTER'?
            </template>
        </dropdown>
    </div>
</template>

<script>
    import { Dropdown } from 'uiv';
    import { vsprintf } from 'sprintf-js';

    export default {
        props: {
            entries: {
                default: [],
                type: Array,
            },
            selectedText: {
                default: '%d of %d selected',
                type: String,
            },
            inputNamePrefix: {
                default: 'entry',
                type: String,
            },
        },
        components: {
            dropdown: Dropdown
        },
        computed: {
            selectedTextFormatted() {
                return vsprintf(this.selectedText, [this.entriesChecked.length, this.entries.length]);
            },
        },
        data() {
            return {
                entriesChecked: [],
                ele: [],
            };
        },
        mounted () {
            this.ele.push(this.$refs.dropdown.$el)
        },
        methods: {
            log() {
                console.log(this.entriesChecked);
            }
        }
    };
</script>

<style lang="scss">
    .btn-group {
        display: block;

        .select-el {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    input[type='checkbox'].css-checkbox {
        position: absolute;
        z-index: -1000;
        left: -1000px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }

    input[type='checkbox'].css-checkbox + label.css-checkbox-label {
        padding-left: 23px;
        height: 16px;
        display: inline-block;
        line-height: 16px;
        font-weight: normal;
        background-repeat: no-repeat;
        background-position: 0 0;
        vertical-align: middle;
        cursor: pointer;
    }

    input[type='checkbox'].css-checkbox:checked + label.css-checkbox-label {
        background-position: 0 -16px;
    }

    label.css-checkbox-label {
        background-image: url('../img/checkbox.png');
        user-select: none;
    }
</style>
