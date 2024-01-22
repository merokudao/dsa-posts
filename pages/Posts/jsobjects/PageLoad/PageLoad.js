export default {
	pageLoad () {
		clearStore()
		storeValue("save_to_db_flag", false);
	},
}