<script>
export default {
  name: 'Button',
  methods: {
    renderChildren () {
      return <span>button</span>
    }
  },
  render (h) {
    return (<div>
      <button>{this.renderChildren()}</button>
    </div>)
  }
}
</script>