Const FolPath = "C:\Users\wanco2\Desktop\DS" '①起点になるフォルダ
Const TageFile = "JUD.txt" '②削除するファイル名
Dim FSO
Dim Counter

Set FSO = CreateObject("Scripting.FileSystemObject")
Call GetSubFolder(FSO.getfolder(FolPath))

'サブフォルダの取得(再帰プロシージャ)
Sub GetSubFolder(Fol)
Dim i
Call FileDelete(Fol)
For Each i In Fol.subfolders
Call GetSubFolder(i)
Next
End Sub

'ファイルの削除
Sub FileDelete(Fol)
Dim FilePath
FilePath = FSO.BuildPath(Fol, TageFile)
If FSO.FileExists(FilePath) Then
FSO.DeleteFile FilePath
Counter = Counter + 1
End If
End Sub