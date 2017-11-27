public class PersonTest {
    public static void main(String[] args) {
        Person person_one = new Person("Phil", 30);
        // System.out.println(person_one.name);
        // person_one.name = "Chris";
        System.out.println(person_one.name);
        System.out.println(person_one.getAge());
        // person_one.setAge(40);
        // System.out.println(person_one.getAge());

        System.out.println("=======================================");
        Person person_two = new Person();
        System.out.println(person_two.name);
        System.out.println(person_two.getAge());
    }
}