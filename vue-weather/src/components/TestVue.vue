<template>
  <div>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Select an Item:" label-for="autocompleteInput">
        <b-form-input
          id="autocompleteInput"
          v-model="selectedItem"
          :list="datalistId"
          placeholder="Start typing..."
        ></b-form-input>
        <datalist :id="datalistId">
          <option v-for="item in items" :key="item.id" :value="item.name"></option>
        </datalist>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalistId: 'autocompleteList',
      selectedItem: '',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
      ],
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission or other actions
      console.log('Selected Item:', this.selectedItem);
    },
  },
};
</script>

<style>
/* Add custom styles as needed */
</style>
