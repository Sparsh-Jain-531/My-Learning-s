package Java_Assignments.java_01_first_java.java_08_palidrome_check;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter String to check weather it is palindrome  or not");
        String str= sc.next();
        System.out.println(palindrome(str));
    }

    // Two Pointer Method
    public static boolean palindrome (String str){
        boolean palidrome=true;
        int start=0;
        int end=str.length()-1;
        while (start<end){
            if (str.charAt(start)!=str.charAt(end)){
                palidrome=false;
                break;
            }
            start++;
            end--;
        }
        return palidrome;
    }
}
