Dim TxtFileName
Dim TxtFileName2
Dim TxtFileName3
Dim Text1
Dim Text2
Dim i
Dim j
Dim TextWrite
Dim Text1i
Dim Texti
Dim n
n = 0
TxtFileName = "C:\Users\wanco2\Desktop\test2.txt"
TxtFileName2 = "C:\Users\wanco2\Desktop\JUDGMENT.txt"
TxtFileName3 = "C:\Users\wanco2\Desktop\ç∑ï™.txt"
With CreateObject("Scripting.FileSystemObject")
With .OpenTextFile(TxtFileName)
Text1 = Split(.ReadAll, vbCrLf)
.Close
End With
With .OpenTextFile(TxtFileName2)
Text2 = Split(.ReadAll, vbCrLf)
.Close
End With
TextWrite = ""
For i = 0 To UBound(Text2)
Text1i = Text2(i)
For Each Texti In Text1
If Text1i <> Texti Then
n = n + 0
Else
n = n + 1
Exit For
End If

Next
Select Case n
Case 0
TextWrite = TextWrite & Text1i & " " & FormatDateTime(Now, 2) & vbCrLf
End Select
n = 0
Next

With .OpenTextFile(TxtFileName3, 2, True)
.Write TextWrite
.Close
End With
End With