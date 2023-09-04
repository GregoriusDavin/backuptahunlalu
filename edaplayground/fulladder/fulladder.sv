module FullAdder (
    input A,    // Input bit pertama
    input B,    // Input bit kedua
    input Cin,  // Input Carry-in
    output Sum, // Output jumlah
    output Cout // Output Carry-out
);

assign Sum = (A^B)^Cin;  // Fungsi XOR untuk menghitung jumlah
assign Cout = (A & B) | (Cin & (A ^ B)); // Fungsi OR dan AND untuk menghitung Carry-out

endmodule