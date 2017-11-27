public class Person {
    public String name;
    private int age;
    
    // method overloading
    public Person() {
        this.name = "Chris";
        this.age = 20;
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    } 


    // encapsulation
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


}