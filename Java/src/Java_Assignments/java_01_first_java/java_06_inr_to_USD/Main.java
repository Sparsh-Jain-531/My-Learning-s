package Java_Assignments.java_01_first_java.java_06_inr_to_USD;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter amount in INR to check in USD: ");
        float inr=sc.nextFloat();
        System.out.println("The Value of ₹"+inr+" in USD is: "+"$"+(inr/85.51));
    }
}
