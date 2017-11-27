import java.util.ArrayList;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
        // primative varible types
        int myNumber = 5;
        float myDec = 5.0f;
        double myDecDouble = 5.50;
        char myChar = 'a';
        boolean bool = true;

        String myStr = "This is my string";
        System.out.println(myDec);
        System.out.println(myDecDouble);

        int[] myArr = new int[5];
        myArr[0] = 1;
        myArr[1] = 2;
        myArr[2] = 3;
        myArr[3] = 4;
        myArr[4] = 5;

        System.out.println(myArr.length);

        int[] my2Arr = {1,2,3,4,5};
        System.out.println(my2Arr[2]);

        ArrayList<String> students = new ArrayList<String>();
        students.add("Kevin");
        students.add("Victor");
        students.add("Leslie");

        System.out.println(students.get(0));
        System.out.println("=======================================");

        for(int i = 0; i < students.size(); i++){
            System.out.println(students.get(i));
        }

        System.out.println("=======================================");

        for(String name: students){
            System.out.println(name);
        }

    } 
} 