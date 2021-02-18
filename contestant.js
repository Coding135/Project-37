class Contestant {
    constructor() {
      this.name = null
      this.distance = 0;
      this.index = null;
    }

    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value", function(data){
      contestantCount = data.val();
// snapshot of a database = exact values inside the database the moment on() detects some sort of value change
// snapshot gets stored inside the parameter (data)
// You can extract the contents of the snapshot as a JavaScript object by calling the val() method.
// .val()) function may also return null, indicating that the DataSnapshot is empty (contains no data).
      });
    }

   updateCount(count) {
    database.ref('/').update({
        contestantCount: count
    });
  }

   update() {
    var contestantIndex = "contestant" + this.index;
    database.ref(contestantIndex).set({
    contestantName: this.name,
    distance: this.distance
    });
  }
  // Static functions are those common functions which are called by the class themselves rather than by objects of the class. 
  // Static functions are not attached to each object of the class.
  // You don't have to make a seperate object when using a static function

  
  static getContestantInfo() {
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value", (data) => {
      allContestants = data.val();
    })
  }
}