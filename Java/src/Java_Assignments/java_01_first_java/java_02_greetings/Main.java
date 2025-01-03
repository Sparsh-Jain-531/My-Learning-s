package Java_Assignments.java_01_first_java.java_02_greetings;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter Name: ");
        Scanner sc=new Scanner(System.in);
        String name=sc.nextLine();
        System.out.println(name(name));
    }

    public static String name(String name){
        return "Hello,"+ name +" have a nice day!!!";
    }
}
