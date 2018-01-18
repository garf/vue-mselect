<template>
    <div class="vue-mselect-wrapper">
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
                    >
                    <label :for="'entry' + index" class="css-checkbox-label">
                        {{ entry.label }}
                    </label>
                </li>
                <li role="separator" class="divider"></li>
                <li class="text-right">
                    <span class="link" @click="selectAll()">Select all</span>
                    <span class="link" @click="unselectAll()">Unselect all</span>
                </li>
            </template>
        </dropdown>
    </div>
</template>

<script>
    import { Dropdown } from 'uiv';
    import { vsprintf } from 'sprintf-js';
    import '../scss/checkbox.scss';
    import '../scss/mselect.scss';

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
        methods: {
            selectAll() {
                this.entriesChecked = this.entries.map(function (entry) {
                    return entry.value;
                });
            },
            unselectAll() {
                this.entriesChecked = [];
            },
            log() {
                console.log(this.entriesChecked);
            }
        },
        mounted () {
            this.ele.push(this.$refs.dropdown.$el)
        }
    };
</script>
