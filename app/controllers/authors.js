import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    postAuthor(){
			let content=this.get('nickname');
 			this.store.createRecord('author',{
				nickname :content
			}).save();
		},
  }
});
