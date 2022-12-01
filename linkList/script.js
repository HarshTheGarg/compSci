function node(value = null , next = null){
    return {
        value: value,
        next: next
    }
}

function linkedList(){
    let head = null;
    let length = 0;

    return {
        append(value){
            let newNode = node(value, null);

            if ( head === null ){
                head = newNode;
            }else{
                let curNode = head;
                while ( curNode.next !== null ){
                    curNode = curNode.next;
                }
                curNode.next = newNode;
            }

            length++;

        },

        prepend(value){
            let newNode = node(value, head);
            head = newNode;
            length ++;
        },
        
        size(){
            return length;
        },
        
        head(){
            return head;
        },

        tail(){
            let curNode = head;
            while( curNode.next !== null ){
                curNode = curNode.next;
            }
            return curNode;
        },

        atIndex( ind ) {
            let curNode = head;
            let i = 0;
            while ( i != ind ) {
                curNode = curNode.next;
                i++;
            }
            return curNode;
        },

        pop(){
            let curNode = head;
            while ( curNode.next.next !== null ) {
                curNode = curNode.next;
            }

            curNode.next = null;
            length--;
        },

        contains( value ) {
            let curNode = head;
            while( curNode !== null ){
                if ( curNode.value === value ) {
                    return true;
                }else{
                    // if ( curNode.next !== null ) {
                    curNode = curNode.next;
                    /* } else {
                        return false;
                    } */
                }
            }
            return false;
        },

        find( value ) {
            let ind = 0;
            let curNode = head;
            while(curNode !== null ) {
                if ( curNode.value === value ){
                    return ind;
                } else {
                    // if ( curNode.next !== null ) {
                    curNode = curNode.next;
                    ind ++;
                    /* } else {
                        return null;
                    } */
                }
            }
            return null;
        },

        toString(){
            let curNode = head;
            console.log(`( ${curNode.value} ) -> `);
            while ( curNode.next !== null ){
                curNode = curNode.next;
                console.log(`( ${curNode.value} ) -> `);
            }
            console.log("null"); 
        },

        insertAt(value, index) {
            let curNode = head;
            let i = 0;
            if ( index == 0 ){
                this.prepend(value);
                return undefined;
            }else if ( index == length){
                this.append(value);
                return undefined;
            }
            while ( i < index - 1) {
                curNode = curNode.next;
                i ++ ;
            }

            let newNode = node(value, curNode.next);
            curNode.next = newNode;
        },

        removeAt(index){
            let curNode = head;
            let i = 0;
            while ( i < index - 1 ){
                curNode = curNode.next;
                i ++ ;
            }
            curNode.next = curNode.next.next;
        }
    }
}