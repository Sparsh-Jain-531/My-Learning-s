package Java_Assignments.java_01_first_java.java_01_even_odd_check;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.print("Enter Number To check Weather it is even or odd: ");
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        System.out.println(even_odd_check(num));
    }

    public static String even_odd_check(int num){
        if (num%2==0) return "Even Number";
        else return "Odd Number";
    }
}
