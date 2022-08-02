import { onMounted } from 'vue'
export default {
  name: 'hubLogin',
  setup () {
    onMounted(() => {
      document.cookie = 'hub.access.token=654654654;'
    })

    return {}
  }
}
