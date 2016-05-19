function collect_same_elements(collection_a, collection_b) {
  var r=[];var k=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        r[k]= collection_a[i];
        k++;
      }
    }
  }
  return r;
}

module.exports = collect_same_elements;
