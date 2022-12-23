import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import WTable from "../table.vue"
import { assert, describe, it } from 'vitest'

describe.only('whale-table', () => {
    it('should work with import on demand', () => {
        mount(WTable)
    })
})