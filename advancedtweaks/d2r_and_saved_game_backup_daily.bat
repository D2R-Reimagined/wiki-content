tar -a -c -f "%USERPROFILE%\Saved Games\Diablo II Resurrected Saved Game Backed up on _%date:~-4,4%%date:~-7,2%%date:~-10,2%_.zip" "%USERPROFILE%\Saved Games\Diablo II Resurrected"
FOR /F "usebackq tokens=3*" %%A IN (`REG QUERY "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\Diablo II Resurrected" /v InstallLocation`) DO (
    set appdir=%%A %%B
    )
start "" "%appdir%\d2r.exe" -mod Reimagined -txt