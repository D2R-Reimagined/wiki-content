FOR /F "usebackq tokens=3*" %%A IN (`REG QUERY "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\Diablo II Resurrected" /v InstallLocation`) DO (
    set appdir=%%A %%B
    )
start "" "%appdir%\d2r.exe" -mod Reimagined -txt